<template>
  <div class="privacidad border-b-16 border-primary">
    <div class="container bg-white py-20">

      <div class="lg:w-4/5 m-auto w-full">
        <h1 class="big-title">AVISO DE PRIVACIDAD</h1>
        <p class="mg:text-lg text-sm mb-3">En línea con la nueva legislación federal de protección de datos personales, por nuestro compromiso con
          usted, por el trabajo ético y responsable que nos caracteriza, nos permitimos darle a conocer el AVISO DE PRIVACIDAD.</p>
        <h2 class="lg:text-xl text-lg  big-title my-6">Responsable de la protección de sus datos personales</h2>
        <p class="mg:text-lg text-sm mb-3">Avance Análisis Investigación y Estudios para el Desarrollo A.C. (en adelante Ethos), con domicilio en Montes
          Urales 424, Lomas de Chapultepec V Sección, Miguel Hidalgo, CP 11000, Ciudad de México, es responsable de
          recabar sus datos personales, del uso que se le de a los mismos y de su protección.</p>
        <h2 class="lg:text-xl text-lg  big-title my-6">¿Para qué fines recabamos y utilizamos sus datos personales?</h2>
        <p>
        <ul class="mg:text-lg text-sm  list-disc list-inside">
          <li class="mb-3">Incluirlo(a) en nuestra lista de afiliados.</li>
          <li class="mb-3">Llevar a cabo cuestiones de facturación y cobranza</li>
          <li class="mb-3">Compartir y comunicar nuestras publicaciones, análisis, noticias y eventos</li>
        </ul>
        </p>
        <h2 class="lg:text-xl text-lg  big-title my-6">¿Qué datos personales obtenemos y de dónde? </h2>
        <p class="mg:text-lg text-sm mb-3">Para las finalidades señaladas en el presente aviso de privacidad recabaremos sus datos personales cuando
          usted nos los proporciona personalmente o directamente vía telefónica o por correo electrónico, los cuales son
          nombre, domicilio, puesto, RFC, CURP, identificación oficial, correo electrónico, y teléfonos. Es importante
          mencionar que Ethos no recaba datos sensibles.</p>
        <h2 class="lg:text-xl text-lg  big-title my-6">¿Con quién compartimos su información personal y para qué fines?</h2>
        <p class="mg:text-lg text-sm mb-3">Le notificamos que, para poder cumplir con las finalidades expresadas anteriormente, no es necesario que sus
          datos personales sean transferidos a personas físicas y/o morales distintas a las que forman parte de Ethos.
        </p>
        <h2 class="lg:text-xl text-lg  big-title my-6">Limitación al Uso y Divulgación de Datos Personales.</h2>
        <p class="mg:text-lg text-sm mb-3">Usted puede dejar de recibir comunicados y publicidad solicitándolo a nuestro oficial de protección de datos
          personales a través del correo electrónico <a href="mailto:privacidad@ethoslaboratorio.com">
            privacidad@ethoslaboratorio.com</a></p>
        <h2 class="lg:text-xl text-lg  big-title my-6">Derechos de Acceso, Rectificación, Cancelación y/u Oposición (ARCO) y medios para revocar el consentimiento.
        </h2>
        <p class="mg:text-lg text-sm mb-3">Hacemos de su conocimiento que en todo momento usted podrá ejercer sus derechos ARCO y/o revocar el
          consentimiento que nos ha otorgado para el tratamiento de sus datos personales, salvo en los casos de
          excepción señalados en la Ley y su Reglamento. Para conocer los procedimientos, requisitos y plazos se puede
          poner en contacto con nuestro Oficial de Protección de Datos Personales mediante el correo electrónico <a
            href="mailto:privacidad@ethoslaboratorio.com"> privacidad@ethoslaboratorio.com</a></p>
        <h2 class="lg:text-xl text-lg  big-title my-6">Procedimientos y Cambios al Aviso de Privacidad.</h2>
        <p class="mg:text-lg text-sm mb-3">Ethos se reserva el derecho de cambiar este Aviso de Privacidad en cualquier momento. Las modificaciones
          estarán disponibles a través de nuestra página <a href="www.ethos.org.mx/es/aviso-privacidad.html"
            target="_blank">www.ethos.org.mx/es/aviso-privacidad.html</a></p>
        <p class="mg:text-lg text-sm mb-3">Si deseas dejar de recibir estos correos, actualizar tus datos o resolver alguna duda sobre nuestra política
          de privacidad, por favor escríbenos a: <a href="mailto:privacidad@ethoslaboratorio.com">
            privacidad@ethoslaboratorio.com</a>.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>

.privacidad {
  background-color: #f5f5f5;

  h1.big-title{
    text-align: center;
    font-size: clamp(1rem, 5vw, 1.8rem);
    margin-bottom: 30px;
    font-weight: 500;
  }

  h2.big-title{
    font-size: clamp(1.1rem, 1vw, 1.6rem);
    margin: 20px 0;
    letter-spacing: 0.22em;
    font-weight: 500;
  }

  p{
    margin: 10px 0;
    line-height: clamp(1.2rem, 1.5vw, 1.6rem);
    font-size: clamp(0.9rem, 1vw, 1.4rem);

    b{
      font-weight: 600;
      font-size: clamp(0.7rem, 1vw, 1rem);
    }
  }


}

</style>
