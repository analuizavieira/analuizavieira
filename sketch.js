  rect(
    xraqueteoponente,
    yraqueteoponente,
    larguraraqueteoponente,
    comprimentoraqueteoponente
  );
}
function movimentoRaqueteOponente() {
  if (keyIsDown(UP_ARROW)) {
    yraqueteoponente -= 10;
  }

  if (keyIsDown(DOWN_ARROW)) {
    yraqueteoponente += 10;
  }
}
function verificaColisaoRaqueteOponente() {
  if (
    xBolinha - raio > xraqueteoponente - larguraraqueteoponente &&
    yBolinha - raio < yraqueteoponente + comprimentoraqueteoponente &&
    yBolinha + raio > yraqueteoponente
  ) {
    velocidadexBolinha *= -1;
  }
}
function placar() {
  textAlign(CENTER);
  textSize(35);
  fill(255);
  text(meuspontos, 250, 35);
  text(pontosdooponente, 320, 35);
}
function marcarponto() {
  if (xBolinha > 600) {
    meuspontos += 1;
  }
  if (xBolinha < 0) {
    pontosdooponente += 1;
  }
}

function bolinhaNaoFicaPresa() {
  if (xBolinha < 0) {
    XBolinha = 15;
  }
  if (xBolinha - raio > 599) xBolinha = 577;
}
