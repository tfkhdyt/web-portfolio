import { IInputForm } from '.'

const InputForm = ({ label, name, type = 'text' }: IInputForm) => {
  return (
    <div className='form-control'>
      <label className='label pt-0'>
        <span className='label-text font-bold text-base-100'>{label}</span>
      </label>
      <input
        type={type}
        placeholder='Type here'
        name={name}
        className='input input-bordered w-full font-medium text-base-content/90'
      />
    </div>
  )
}
export default InputForm
