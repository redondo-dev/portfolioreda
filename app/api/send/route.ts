import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Vérifier que la clé API est définie
if (!process.env.RESEND_API_KEY) {
  throw new Error('RESEND_API_KEY n\'est pas définie dans les variables d\'environnement');
}

// Initialiser Resend avec la clé API
const resend = new Resend(process.env.RESEND_API_KEY);

// Interface pour valider la structure du corps de la requête
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Exporter la méthode POST
export async function POST(req: Request) {
  const res = NextResponse;

  // Validation des données
  const { name, email, message } = await req.json() as ContactFormData;

  if (!name || !email || !message) {
    return res.json({ 
      message: 'Tous les champs sont requis',
      missingFields: {
        name: !name,
        email: !email,
        message: !message,
      },
    }, { status: 400 });
  }

  // Validation de l'email (expression régulière simple)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.json({ message: 'Format d\'email invalide' }, { status: 400 });
  }

  try {
    // Envoi de l'email
    const emailResponse = await resend.emails.send({
      from: 'Formulaire Portfolio <onboarding@resend.dev>',
      to: 'riad.reda.fethi@gmail.com',
      subject: `Nouveau message de ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #333;">Nouveau message depuis le portfolio</h1>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Nom :</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Email :</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px; vertical-align: top;"><strong>Message :</strong></td>
              <td style="padding: 10px;">${message}</td>
            </tr>
          </table>
        </div>
      `,
    });

    // Gérer la réponse de l'envoi d'email
    if (emailResponse.error) {
      console.error('Erreur lors de l\'envoi de l\'email', emailResponse.error);
      return res.json({ 
        success: false, 
        message: 'Erreur lors de l\'envoi de l\'email',
        error: emailResponse.error,
      }, { status: 500 });
    }

    // Succès
    return res.json({ 
      success: true, 
      message: 'Email envoyé avec succès',
      data: emailResponse,
    }, { status: 200 });

  } catch (error) {
    // Gestion des erreurs inattendues
    console.error('Erreur lors de l\'envoi de l\'email :', error);
    return res.json({ 
      success: false, 
      message: 'Une erreur inattendue s\'est produite',
      error: error instanceof Error ? error.message : 'Erreur inconnue',
    }, { status: 500 });
  }
}
