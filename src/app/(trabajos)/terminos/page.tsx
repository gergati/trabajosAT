import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";



export default function TerminosPage() {
  return (
    <div className="m-auto w-[90%] md:w-[70%] bg-[#EDF7F5] dark:bg-[#020817]">
      <div className="min-h-screen md:mt-10">
        <CardHeader>
          <CardTitle>Términos y condiciones</CardTitle>
        </CardHeader>
        <CardContent>
          <CardTitle className="text-lg"> Aceptación de Términos</CardTitle>
          <CardDescription>Al acceder y utilizar nuestro sitio web, usted acepta cumplir y estar sujeto a los siguientes términos y condiciones. Si no está de acuerdo con estos términos, no debe usar este sitio.</CardDescription>

          <CardTitle className="text-lg">Modificación de los Términos</CardTitle>
          <CardDescription>Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en el sitio web. Es responsabilidad del usuario revisar regularmente estos términos y condiciones.</CardDescription>

          <CardTitle className="text-lg">Descripción del Servicio</CardTitle>
          <CardDescription>Nuestro sitio web proporciona una plataforma para la publicación y búsqueda de trabajos para acompañantes terapéuticos en la ciudad de Bahía Blanca. No garantizamos la exactitud, integridad o disponibilidad de las ofertas de trabajo publicadas.</CardDescription>

          <CardTitle className="text-lg">Registro de Usuario</CardTitle>
          <CardDescription>Para acceder a ciertas funciones del sitio, es posible que deba registrarse y proporcionar información veraz, completa y actualizada. Usted es responsable de mantener la confidencialidad de su cuenta y contraseña y de todas las actividades que ocurran bajo su cuenta.</CardDescription>

          <CardTitle className="text-lg">Uso Aceptable</CardTitle>
          <CardDescription>Usted se compromete a utilizar el sitio web únicamente para fines legales y de acuerdo con estos términos. No debe utilizar el sitio para:</CardDescription>
          <CardFooter>
            <ul className="text-sm gap-2">
              <li>1. Publicar contenido falso, engañoso o fraudulento.</li>
              <li>2. Infringir derechos de terceros, incluyendo derechos de propiedad intelectual.</li>
              <li>3. Distribuir virus o cualquier otra tecnología que pueda dañar el sitio o sus usuarios.</li>
            </ul>
          </CardFooter>
          <CardTitle className="text-lg">Contenido de Usuario</CardTitle>
          <CardDescription>Usted es responsable de cualquier contenido que publique en el sitio web. Al publicar contenido, usted otorga a nuestro sitio una licencia no exclusiva, libre de regalías, y mundial para usar, reproducir, modificar y distribuir dicho contenido.</CardDescription>

          <CardTitle className="text-lg">Privacidad</CardTitle>
          <CardDescription>Nuestra política de privacidad describe cómo recopilamos, utilizamos y protegemos su información personal. Al usar nuestro sitio web, usted acepta la recopilación y el uso de información de acuerdo con nuestra política de privacidad.</CardDescription>

          <CardTitle className="text-lg">Exención de Responsabilidad</CardTitle>
          <CardDescription>
            El sitio web se proporciona &quot;tal cual&quot; y &quot;según disponibilidad&quot;. No garantizamos que el sitio será ininterrumpido o libre de errores. No somos responsables de ningún daño, directo o indirecto, que surja del uso del sitio.
          </CardDescription>


          <CardTitle className="text-lg">Limitación de Responsabilidad</CardTitle>
          <CardDescription>En ningún caso seremos responsables por daños indirectos, incidentales, especiales o consecuentes, incluidos, entre otros, la pérdida de beneficios, datos o uso, incurridos por usted o cualquier tercero, ya sea en una acción contractual o extracontractual, que surja de su acceso o uso del sitio.</CardDescription>

          <CardTitle className="text-lg">Indemnización</CardTitle>
          <CardDescription>Usted acepta indemnizar y mantenernos indemnes de cualquier reclamo, demanda o daño, incluyendo honorarios razonables de abogados, que surjan de su uso del sitio o su violación de estos términos.</CardDescription>

          <CardTitle className="text-lg">Vinculación a Otros Sitios Web</CardTitle>
          <CardDescription>Nuestro sitio puede contener enlaces a sitios web de terceros. No somos responsables del contenido o prácticas de privacidad de dichos sitios.</CardDescription>

          <CardTitle className="text-lg">Ley Aplicable</CardTitle>
          <CardDescription>
            Estos términos y condiciones se regirán e interpretarán de acuerdo con las leyes de la República Argentina. Cualquier disputa que surja en relación con estos términos será resuelta en los tribunales de Bahía Blanca, Argentina.</CardDescription>

          <CardTitle className="text-lg">Contacto</CardTitle>
          <CardDescription>
            Si tiene alguna pregunta sobre estos términos y condiciones, puede ponerse en contacto con nosotros a través de <span className="underline">gergati1994@gmail.com</span>.
          </CardDescription>
        </CardContent>
      </div>
    </div>
  );
}