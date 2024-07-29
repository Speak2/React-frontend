import React from 'react'; 

const CalendarSection = () => {
  return (
    <div className="calendar-section">
      <h2>Select check-in date</h2>
      <p>Add your travel dates for exact pricing</p>

      {/* Calendar starts here */}
      <div className="calendar-container">
        <div className="calendar-header">
          <button className="prev-month">&lt;</button>
          <div className="month-year">
            <span className="month">July 2024</span>
            <span className="month-2">August 2024</span>
          </div>
          <button className="next-month">&gt;</button>
        </div>
        <div className="calendars">
          <div className="calendar-1">
            <div className="weekdays">
              <div>Su</div>
              <div>Mo</div>
              <div>Tu</div>
              <div>We</div>
              <div>Th</div>
              <div>Fr</div>
              <div>Sa</div>
            </div>
            <div className="days">
              {/* July 2024 */}
              <div className="empty"></div>
              <div className="empty"></div>
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
              <div>6</div>
              <div>7</div>
              <div>8</div>
              <div>9</div>
              <div>10</div>
              <div>11</div>
              <div>12</div>
              <div>13</div>
              <div>14</div>
              <div>15</div>
              <div>16</div>
              <div>17</div>
              <div>18</div>
              <div>19</div>
              <div>20</div>
              <div>21</div>
              <div>22</div>
              <div>23</div>
              <div>24</div>
              <div>25</div>
              <div>26</div>
              <div>27</div>
              <div>28</div>
              <div>29</div>
              <div>30</div>
              <div>31</div>
            </div>
          </div>
          <div className="calendar-2">
            <div className="weekdays">
              <div>Su</div>
              <div>Mo</div>
              <div>Tu</div>
              <div>We</div>
              <div>Th</div>
              <div>Fr</div>
              <div>Sa</div>
            </div>
            <div className="days">
              {/* August 2024 */}
              <div className="empty"></div>
              <div className="empty"></div>
              <div className="empty"></div>
              <div className="empty"></div>
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
              <div>6</div>
              <div>7</div>
              <div>8</div>
              <div>9</div>
              <div>10</div>
              <div>11</div>
              <div>12</div>
              <div>13</div>
              <div>14</div>
              <div>15</div>
              <div>16</div>
              <div>17</div>
              <div>18</div>
              <div>19</div>
              <div>20</div>
              <div>21</div>
              <div>22</div>
              <div>23</div>
              <div>24</div>
              <div>25</div>
              <div>26</div>
              <div>27</div>
              <div>28</div>
              <div>29</div>
              <div>30</div>
              <div>31</div>
            </div>
          </div>
        </div>
      </div>
      <button className="clear-dates">Clear dates</button>
      {/* Calendar ends here */}
    </div>
  );
};

export default CalendarSection;
