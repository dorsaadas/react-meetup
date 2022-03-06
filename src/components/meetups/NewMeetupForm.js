import style from "./NewMeetupForm.module.css";
import Card from "../ui/Card";
import { useRef } from "react";

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const InputImageRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const descriptionTitle = titleInputRef.current.value;
    const descriptionImage = InputImageRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const descriptionDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: descriptionTitle,
      image: descriptionImage,
      address: enteredAddress,
      description: descriptionDescription,
    };
    props.onAddMeetup(meetupData);
  };

  return (
    <Card>
      <form className={style.form} onSubmit={submitHandler}>
        <div className={style.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={style.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={InputImageRef} />
        </div>
        <div className={style.control}>
          <label htmlFor="address">Meetup Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={style.control}>
          <label htmlFor="description">Meetup Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={style.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}
export default NewMeetupForm;
