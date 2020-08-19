import React from 'react'

export default function Form(props) {
  const { values, update, submit } = props

  const onChange = evt => {
    const { name, value } = evt.target
    update(name, value)
  }

  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  return (
    <form className='form container' onSubmit={onSubmit}>

      <div className='form-group inputs'>
        <h1>Add a Team Member</h1>
        <label>Name:&nbsp;
          <input
            value={values.name}
            onChange={onChange}
            name='name'
            placeholder='type name'
            maxLength='20'
            type="text"
          />
        </label>

        <br></br>
        <br></br>

        <label>Email:&nbsp;
          <input
            value={values.email}
            onChange={onChange}
            name='email'
            placeholder='type email'
            maxLength='30'
            type='email'
          />
        </label>

        <br></br>
        <br></br>
        
        <label>Role:&nbsp;
          <select onChange={onChange} value={values.role} name="role">
            <option value="">-- Select a Role --</option>
            <option value="backend">Backend Engineer</option>
            <option value="frontend">Frontend Engineer</option>
            <option value="designer">Designer</option>
          </select>
        </label>

        <br></br>

        <div className='form-group submit'>
        <br></br>
        <button disabled={!values.name || !values.email || !values.role ? true : false}>submit</button>
      </div>

      </div>
    </form>
  )
}