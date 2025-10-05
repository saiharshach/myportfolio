import React, { useState } from 'react';
import './index.scss';

const Timeline = () => {
  const [events, setEvents] = useState([
    {
      date: 'August 2025 - Present',
      title: 'Senior Vice President',
      description: [
        "<b>Presided over meetings in the President's absence and mentored new members.</b>,Maintained communication among Executive Board and club members to ensure smooth administration.",
      "Coordinated with Events Chair and Representatives, delegating duties and tracking progress.Assisted the President in decision-making and leadership succession planning.Ensured regular updates and reporting to the President and maintained strong internal communication.",
      ],
      expanded: false,
    },
    {
      date: 'July 2024 - September 2025',
      title: 'Junioir Vice President',
      description: [
        "Assisted the President and ensured smooth administration of club activities.Coordinated with Executive Committee and other club leaders for events and meetings.",
      "Delegated duties to members and ensured leadership succession by mentoring new leaders.Managed communication with Finance Chair, Secretary, and other executives for approvals and updates.",
      "Oversaw event reports and the annual club report, maintaining adherence to guidelines and deadlines.",
      ],
      expanded: false,
    },
    {
      date: 'September 2023-July 2024',
      title: 'Broadcast Chair',
      description: [
        "Publicized club activities across social media platforms, ensuring maximum engagement.Operated and managed all official club social media handles with proper approvals.",
      "Led the Communications Team and coordinated event documentation with Photographers and Publicity Chair.Implemented effective marketing strategies and trend analysis to improve audience engagement.",
      "Collaborated with Creative and Events Chairs to generate buzz before, during, and after events.",
      ],
      expanded: false,
    },
  ]);

  const handleItemClick = (index) => {
    setEvents((prevEvents) => {
      const updatedEvents = prevEvents.map((event, idx) => {
        if (idx === index) {
          return { ...event, expanded: !event.expanded };
        }
        return event;
      });
      return updatedEvents;
    });
  };

  return (
    <div className="timeline-container">
      {events.map((event, index) => (
        <div
          className={`timeline-item ${event.expanded ? 'expanded' : ''}`}
          key={index}
          onClick={() => handleItemClick(index)}
        >
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <h2>{event.title}</h2>
            {event.expanded ? (
              <div>
                {event.description.map((desc, descIndex) => (
                  <p key={descIndex} dangerouslySetInnerHTML={{ __html: desc }} />
                ))}
              </div>
            ) : (
              <>
                <div className="more">
                  <p>Click for more</p>
                </div>
                <div className="date">{event.date}</div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
