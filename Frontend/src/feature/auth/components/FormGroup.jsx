
const FormGroup = ({lable , placeholder , value , onChange}) => {
  return (
    <div className='form-group'>
        <lable htmlFor={lable}>{lable}</lable>
        <input value={value} onChange={onChange} type="text" id={lable} name={lable} placeholder={placeholder} required />
    </div>
  )
}

export default FormGroup