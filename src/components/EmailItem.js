const EmailItem = ({sender, message, time, body, onClickEmail, setUnread}) => {

    const clickedOnEmail = () => {
        onClickEmail({sender, message, time, body});
        setUnread(state => {
            if(state >= 1) {
              return state - 1
            }
            return state = 0;
        })
    }

  return (
    <tr onClick={clickedOnEmail}>
      {/* <!-- label --> */}
      <td class='pl-3'>
        <div class='custom-control custom-checkbox'>
          <input type='checkbox' class='custom-control-input' id='cst1' />
          <label class='custom-control-label' for='cst1'>
            &nbsp;
          </label>
        </div>
      </td>
      {/* <!-- star --> */}
      <td>
        <i class='fa fa-star text-warning'></i>
      </td>
      <td>
        <span class='mb-0 text-muted'>{sender}</span>
      </td>
      {/* <!-- Message --> */}
      <td>
        <a class='link' href="!#">
          <span class='text-dark'>{message}</span>
        </a>
      </td>
      {/* <!-- Attachment --> */}
      <td>
        <i class='fa fa-paperclip text-muted'></i>
      </td>
      {/* <!-- Time --> */}
      <td class='text-muted'>{time}</td>
    </tr>
  );
};


export default EmailItem;