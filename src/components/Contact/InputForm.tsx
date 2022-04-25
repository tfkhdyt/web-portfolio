import { IInputForm } from '.';

const InputForm = ({ label, name, type = 'text', ...rest }: IInputForm) => {
  return (
    <div className='form-control'>
      <label className='label pt-0'>
        <span className='label-text font-bold text-base-100'>{label}</span>
      </label>
      <input
        type={type}
        name={name}
        className='input input-bordered w-full font-medium text-base-content/90'
        required
        {...rest}
      />
    </div>
  );
};
export default InputForm;
