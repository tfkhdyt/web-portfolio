import { IInputForm } from '.'

const TextArea = ({ label, name }: IInputForm) => {
  return (
    <div className='form-control'>
      <label className='label pt-0'>
        <span className='label-text font-bold text-base-100'>{label}</span>
      </label>
      <textarea
        name={name}
        className='textarea textarea-bordered h-24 resize-none font-medium text-base-content/90'
        placeholder='Type here'
        required
      ></textarea>
    </div>
  )
}

export default TextArea
