import "./Card.css";

function Card(props) {
  //am facut componentu card pentru a exporta css unde dorim adica tot ce avem la card.css il putem folosi in alte componente si cu props children specificam ca oridunde o sa folosim componntu cards  o sa afecteze tot ce se afla in interioru divului unde o sa folosim componentu nostru(vezi expensiveItems)

  const classes = "card " + props.className;
  //cu  clases specificam ca dorim sa folosim atat clasa card cat si clasele adiacente pe care le au componentele unde o sa folosim componenta card,iar dupa specificam ca dorim sa avem un return de classname = cu variabila noasta

  //NU UITA DE SPATIU CAND classes= "card " spatiul  dupa card ca sa nu se uneasca cu ce avem in props
  return <div className={classes}>{props.children}</div>;
}
export default Card;
