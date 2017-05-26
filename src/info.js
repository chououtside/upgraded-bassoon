import React from 'react';

const Info = ({ infoObject }) => {
  const links = !infoObject.socialProfiles ? [] : infoObject.socialProfiles;

  return <div>
    <div><img src={!infoObject.photos ? 'https://goo.gl/n4mq73' : infoObject.photos[0].url} className="photo"/></div>
    <div><span>Full Name: </span>{!infoObject.contactInfo ? 'N/A' : infoObject.contactInfo.fullName}</div>
    <div><span>General Location: </span>{!infoObject.demographics ? 'N/A' : !infoObject.demographics.locationGeneral ? 'N/A' : infoObject.demographics.locationGeneral}</div>
    <div>
      <span>Links to all Given Profiles</span>
      <ul>
        {links.map((profile, index) => <li key={index}><a target="_blank" href={profile.url}>{profile.url}</a></li>)}
      </ul>
    </div>
  </div>
};

export default Info;
