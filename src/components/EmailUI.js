import {useState} from 'react'
import EmailItem from './EmailItem'
import emails from '../emails.json'

const EmailUI = ({currentEmail, setCurrentEmail}) => {

  const [unreadEmails, setUnread] = useState(emails.length)

  const onClickEmail = (email) => {
    setCurrentEmail(email);
  }

  const createMarkup = (markup) => {
    return { __html: `${markup}` };
  };

  return (
    <>
      <link
        href='https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css'
        rel='stylesheet'
      />

      <div class='container'>
        <div class='row'>
          <div class='col-md-12 col-lg-12 col-sm-12'>
            <div class='card'>
              <div class='card-body bg-purple text-white mailbox-widget pb-0'>
                <h2 class='text-white pb-3'>Your Mailbox</h2>
                <ul
                  class='nav nav-tabs custom-tab border-bottom-0 mt-4'
                  id='myTab'
                  role='tablist'
                >
                  <li class='nav-item'>
                    <a
                      class='nav-link active'
                      id='inbox-tab'
                      data-toggle='tab'
                      aria-controls='inbox'
                      href='#inbox'
                      role='tab'
                      aria-selected='true'
                    >
                      <span class='d-block d-md-none'>
                        <i class='ti-email'></i>
                      </span>
                      <span class='d-none d-md-block'> INBOX</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div class='tab-content' id='myTabContent'>
                <div
                  class='tab-pane fade active show'
                  id='inbox'
                  aria-labelledby='inbox-tab'
                  role='tabpanel'
                >
                  <div>
                    <div class='row p-4 no-gutters align-items-center'>
                      <div class='col-sm-12 col-md-6'>
                        <h3 class='font-light mb-0'>
                          <i class='ti-email mr-2'></i>{unreadEmails} unread emails
                        </h3>
                      </div>
                    </div>
                    {/* <!-- Mail list--> */}
                    <div class='table-responsive'>
                      <table class='table email-table no-wrap table-hover v-middle mb-0 font-14'>
                        <tbody>
                            {emails.map(email =>  (
                              <EmailItem {...email} onClickEmail={onClickEmail} setUnread={setUnread} />
                            ))}

                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <hr/>
              {currentEmail.sender ? (
                  <div className="p-4">
                  <small>Sent by: {currentEmail.sender}</small>
                  <h5>{currentEmail.message}</h5>
                  <br/>
                 <div className="message-item">
                 <p dangerouslySetInnerHTML={createMarkup(currentEmail.body)}></p>
                 </div>
                  </div>
              ) : null} 
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default EmailUI;