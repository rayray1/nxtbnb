import houses from "../houses.js";
import House from '../components/House'
import Layout from '../components/Layout'


const content = (
  <div>
    <h2>Places to Stay</h2>

    <div className="houses">
      {houses.map((house, index) => {
        return <House key={index} {...house} /> // pass all the hse propereties as props using the {...house} syntx
      })}
    </div>

    <style jsx>{`
      .houses {
        display: grid;
        grid-template-columns: 49% 49%;
        grid-template-rows: 300px 300px;
        grid-gap: 2%;
      }
    `}
    </style>
  </div>
)
  
export default function Home() {
  return <Layout content={content} />
};
  