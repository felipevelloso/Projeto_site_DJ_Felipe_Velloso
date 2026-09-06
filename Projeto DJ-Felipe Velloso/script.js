function enviarWhats() {
  const numero = "11 948400617"; // meu númedo de contato para futuros eventos
  const mensagem = "Olá, gostaria de contratar seus serviços de DJ!";

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, "_blank");
}
