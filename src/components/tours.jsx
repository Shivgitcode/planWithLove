import Card from "./card";

export default function Tours({ tours, removeTour }) {
  return (
    <div>
      <div>
        <h1>Plan with Love</h1>
      </div>
      <div>
        {tours.map((tour) => {
          return <Card {...tour} removeTour={removeTour}></Card>;
        })}
      </div>
    </div>
  );
}
