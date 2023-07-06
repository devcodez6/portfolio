import "./about.css"
import award from "../../img/award.jpg"

const About = () => {
  return (
    <div className="a">
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/007/814/266/small/programmer-and-engineering-development-coding-web-development-website-design-developer-flat-vector.jpg" alt="" className="a-img" />
            </div>
        </div>
        <div className="a-right">
          <h1 className="a-title">About Me</h1>
          <p className="a-sub">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic error, consequatur rem esse corrupti praesentium enim id
            nesciunt alias tempore nisi ab quae nemo earum minima deleniti, ad voluptate illo.
          </p>
          <p className="a-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea delectus distinctio tenetur ipsum, reiciendis expedita aspernatur, illum illo quasi incidunt quas non eius mollitia veritatis nostrum quo dignissimos est ex.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quam minus nesciunt soluta facere? Debitis eos ullam aliquid dicta dolorum quaerat, fuga natus cum quod, aliquam, recusandae ad impedit excepturi!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius laboriosam aliquid ex saepe facere laudantium ullam. Similique eum facere et soluta distinctio aspernatur recusandae necessitatibus quaerat ullam at! Temporibus, laborum?
          </p>
           <div className="a-award">
            <img src={award} alt="" className="a-award-img" />
           </div>
        </div>
    </div>
  )
}

export default About