import React from "react";
import style from "./Contecto.module.css";
import contectimg from "../../assets/contact2.png";
function Contecto() {
  return (
    <>
      <div className={`${style.main}`}>
        <div className={`${style.first}`}>
          <h1>Contect</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            veritatis quod ratione quibusdam, cum dolorem, ipsa nihil
            exercitationem impedit aspernatur quaerat similique accusantium ut
            illo officia cupiditate doloremque animi eius labore eligendi
            dignissimos ipsam in earum. Consequatur ut optio quam?
          </p>
        </div>
        <div className={`${style.second}`}>
          <div className={`${style.one}`}>
            <div className={`${style.one_one}`}>
              <div className={`${style.btns}`}>
                <button>Support</button>
                <button>Call</button>
              </div>
              <button>Mail</button>
            </div>
            <div className={`${style.one_two}`}>
              <input type="text" placeholder="Name" name="" id="" />
              <input type="text" placeholder="E-mail" name="" id="" />
              <textarea name="" placeholder="Message" rows={5} id=""></textarea>
              <div className={`${style.btn_end}`}>
              <button>Submit</button>
              </div>
            </div>
          </div>
          <div className={`${style.two}`}>
            <img src={contectimg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contecto;
