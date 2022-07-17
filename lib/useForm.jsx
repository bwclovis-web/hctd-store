import { useEffect, useState } from 'react';

const useFormHook = (init) => {
    const [inputs, setInputs] = useState(init);
    const initValues = Object.values(init).join('');

    useEffect(() => {
        setInputs(init);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [initValues]);

    const handleChange = (evt) => {
        let { value, name, type } = evt.target;
        if (type === 'number') {
            value = parseInt(value);
        }
        if (type === 'file') {
            [value] = evt.target.files;
        }
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const resetForm = () => {
        setInputs(init);
    };


    return {
        inputs,
        handleChange,
        resetForm
    };
};

export default useFormHook;
