import React from "react";

function Form() {
  return (
    <div>
      <form>
        <div className="containor">
          <div className="text-ceter">
            <span className="bg-warning">REGISTRATION FORM</span>
            <div>
              <label>FIRST NAME</label>
            </div>
            <div>
              <input type="text" />
            </div>
            <div>
              <label>LAST NAME</label>
            </div>
            <div>
              <input type="text" />
            </div>
            <div>
              <label>GENDER</label>
            </div>
            <div>
              <input type="radio" name="gen" />
              MEN
              <input type="radio" name="gen" />
              WOMEN
              <input type="radio" name="gen" />
              OTHERS
            </div>
            <div>
              <label htmlFor="mail">Email</label>
            </div>
            <div>
              <input type="email" placeholder="kk@gmail.com" />
            </div>
            <div>
              <label htmlFor="mobile">MOBILE NUMBER</label>
            </div>
            <div>
              <input type="number" />
            </div>
            <div>
              <label htmlFor="password">PASSWORD</label>
            </div>
            <div>
              <input type="password" max={8} />
            </div>
            <div>
              <label htmlFor="confirm password">CONFORM PASSWORD</label>
            </div>
            <div>
              <input type="password" max={8} />
            </div>
            <br></br>
            <div>
              <label htmlFor="chqcbox">I"M NOT A ROBOOT</label>
              <input type="checkbox" />
            </div>
            <br></br>
            <div>
              <button type="submit">SUBMIT</button>
              <button type="reset">RESET</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Form;
