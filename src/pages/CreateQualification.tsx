import React, { useState } from 'react';
import axios from 'axios';
 
interface Qualification {
  degree: string;
  description: string;
}
interface Props {
    token: string | null;
}
 
const CreateQualification: React.FC<Props> = ({token}) => {
  const [qualification, setQualification] = useState<Qualification>({
    degree: '',
    description: ''
  });
 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setQualification(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
        const response = await axios.post('https://psl-test2-b8593d29856b.herokuapp.com/api/v1/qualifications', qualification,
        {
            headers: {
              Authorization: `Bearer ${token}`
            }
        } 
        );
      console.log('Data sent successfully:', response.data);
      // Optionally, reset form fields after successful submission
      setQualification({
        degree: '',
        description: ''
      });
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };
 
  return (
    <div>
      <h2>Qualification Details Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Degree:
            <input
              type="text"
              name="degree"
value={qualification.degree}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Description:
            <textarea
              name="description"
              value={qualification.description}
              onChange={handleChange}
              required
              rows={4}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
 
export default CreateQualification;