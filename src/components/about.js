import { React, useEffect, useState } from "react";
import TextInput from "../reusable-components/input/input-text";
import { LAST_NAME, LAST_NAME_TITLE, } from './constants';
import { Controller } from 'react-hook-form'
import Button from "../reusable-components/button/button";



function About(){
        const [isEditing, setIsEditing] = useState(false);
        const handleInputChange = (e, onChangeValidationController) => {
            const { name, value } = e.target;
            onChangeValidationController(value);
            setIsEditing(true);
        }
        return (
            <div>
                <h1> This is the about page </h1>
                <p> working about page</p>

                <div>
                    <Controller
                        render={({ field: { value, onChange } }) => (
                            <TextInput
                                type={'text'}
                                placeHolder={LAST_NAME_TITLE}
                                name={LAST_NAME}
                                value={value}
                                onChangeCb={(e) => handleInputChange(e, onChange)}
                            />
                        )}
                    />
                </div>

                <Button type={BUTTON_TYPE.PRIMARY} style={styles.buttonPadding} disabled={!isEditing} onClickCb={handleSubmit(handleFormSubmit)}>Save Profile</Button>

            </div>
        );

}
export default About; 