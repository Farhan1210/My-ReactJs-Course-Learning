const Theme = (props) => {

    const newTheme = function() {
        props.setTheme('dark')
        props.setBackground('#111')
        props.setColor('#fff')
    }

  return (
    <div>
      <button onClick={newTheme} className='btn'>Click</button>
    </div>
  )
}

export default Theme
