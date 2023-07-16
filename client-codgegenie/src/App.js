import logo from './logo.svg';
import './normalize.css';
import './App.css';


/* TODO: 
 *         Continue video from 24:24
 */

function App() {
  return (
    <div className="App">

      <aside className="side-menu"> 
        <div className="side-menu-button">
          <span>+</span>
          New Chat
        </div>
      </aside>
      <section className="chatbox">
        <div className="chat-log">
          <div className="chat-message">
            <div className="center-chat-message">
              <div className="avatar">
                
              </div>
              <div className="message">
                Hello World
              </div>
            </div>
          </div>
        </div>
        <div className="chat-input-holder">
          <textarea className="chat-input-textarea"
                    placeholder="Type your message here"
                    rows="1"
          >
          </textarea>
        </div>
      </section>
    </div>
  );
}

export default App;
