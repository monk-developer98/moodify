
const FormGroup = ({lable , placeholder}) => {
  return (
    <div className='form-group'>
        <lable htmlFor={lable}>{lable}</lable>
        <input type="text" id={lable} name={lable} placeholder={placeholder} required />
    </div>
  )
}

export default FormGroup