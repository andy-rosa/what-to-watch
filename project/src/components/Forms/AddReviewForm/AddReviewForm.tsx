import React, {useState} from 'react';
import ReviewText from './elements/ReviewText';
import ReviewRating from './elements/ReviewRating';

export type EvtFormProps = {
  target : {
    name: string | null;
    value: string | null;
  };
}

export type FormProps = {
  'rating': string;
  'review-text': string;
}

const AddReviewForm = (): JSX.Element => {
  const [form, setForm] = useState<FormProps>({
    'rating': '',
    'review-text': '',
  });

  const changeFormData = (evt: EvtFormProps) => {
    const { name, value } = evt.target;
    setForm({...form, [name as string]: value});
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <ReviewRating formDataHandler={changeFormData}/>
        < ReviewText formDataHandler={changeFormData} form={form}/>
      </form>
    </div>
  );
};

export default AddReviewForm;
