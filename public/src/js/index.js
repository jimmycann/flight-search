function component () {
  return $("<p />", { text:"Hello", id:"greeting", css:{color:'blue'} })
}

$('body').append(component());
