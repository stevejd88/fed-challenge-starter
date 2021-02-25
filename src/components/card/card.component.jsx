import React from 'react';
import { connect } from 'react-redux';

import { toggleCardClicked } from '../../redux/card/card.actions';

import './card.style.css';

const Card = ({
  headline,
  time,
  views,
  thumbImg,
  trainerImg,
  workouts,
  toggleCardClicked,
  clicked
}) => {
  return (
    <div
      className={`card ${clicked ? 'clicked' : ''}`}
      onClick={toggleCardClicked}
    >
      <div className='thumbnail-div'>
        <img className='thumbnail-img' src={thumbImg} alt='video' />
        {workouts ? (
          <div className='workout-overlay'>
            <p>{workouts}</p>
            <p className='workouts'>workouts</p>
          </div>
        ) : null}
      </div>

      <div className='card-info'>
        <div className='card-headline'>
          <p>{headline}</p>
          <img src={trainerImg} alt='trainer' />
        </div>
        {time && views ? (
          <div className='trainer-data'>
            <span>
              <i className='glyphicon glyphicon-time'></i>
              {time}
            </span>
            <span>
              <i className='glyphicon glyphicon-eye-open'></i>
              {views}
            </span>
          </div>
        ) : null}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  clicked: state.card
});

const mapDispatchToProps = (dispatch) => ({
  toggleCardClicked: () => dispatch(toggleCardClicked())
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
