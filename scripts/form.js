const $form = document.querySelector("#form");

$form.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData($form);

    try {
        const response = await fetch($form.action, {
            method: $form.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            $form.reset();
            Swal.fire({
                title: "Mensaje enviado",
                text: "Gracias por contactarnos. Nos comunicaremos contigo pronto.",
                icon: "success",
                confirmButtonText: "Aceptar"
            });
        } else {
            Swal.fire({
                title: "Error",
                text: "No se pudo enviar el formulario. Intenta nuevamente.",
                icon: "error",
                confirmButtonText: "Cerrar"
            });
        }
    } catch (error) {
        console.error(error);
        Swal.fire({
            title: "Error inesperado",
            text: "Ocurrió un error al enviar tu mensaje. Por favor, intenta más tarde.",
            icon: "error",
            confirmButtonText: "Cerrar"
        });
    }
}
