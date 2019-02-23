import React from 'react'

export default function UserOutput(props) {
  return (
    <div>
        <div> <h3 onClick= {props.clicked} value={props.name}>Hi I am {props.name} and I am prop passed on from the parent app component!! </h3> </div>
        <p>Bacon ipsum dolor amet andouille jerky frankfurter alcatra salami ground round. Meatball shoulder cow ham hock leberkas salami chuck pork belly shank. Fatback turducken prosciutto porchetta pork loin. Corned beef spare ribs tongue short ribs buffalo turkey fatback shank pork. Drumstick shankle ball tip, capicola alcatra ribeye hamburger leberkas tail strip steak chuck pork loin ground round burgdoggen cupim. Corned beef meatball ribeye, venison boudin bresaola chicken drumstick. Flank beef ribs cow biltong cupim meatball rump.</p>
        <p>Sausage frankfurter ribeye sirloin shankle, ham spare ribs pancetta kevin pork belly drumstick bresaola t-bone short loin. Filet mignon ham cupim brisket alcatra, salami pancetta prosciutto. Meatball andouille ribeye alcatra, cow capicola beef ribs tri-tip drumstick doner short loin short ribs ham jowl pork. Biltong pig frankfurter, tail porchetta alcatra tri-tip spare ribs beef kevin hamburger pork chop. Ground round tail beef ribs short loin meatball ribeye kielbasa chicken. Brisket swine ribeye leberkas short loin corned beef prosciutto. Kielbasa spare ribs pastrami pork alcatra, shank leberkas pork loin t-bone ground round cow tongue.</p>
    
    </div>
  )
}
