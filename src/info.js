import React from 'react';

const Info = ({ infoObject }) => {
  const links = !infoObject.socialProfiles ? [] : infoObject.socialProfiles;

  return <div>
    <div><img src={!infoObject.photos ? 'https://goo.gl/n4mq73' : infoObject.photos[0].url} className="photo"/></div>
    <div>Full Name: {!infoObject.contactInfo ? 'N/A' : infoObject.contactInfo.fullName}</div>
    <div>General Location: {!infoObject.demographics ? 'N/A' : infoObject.demographics.locationGeneral}</div>
    <div>
      Links to all Given Profiles
      <ul>
        {links.map((profile) => <li><a target="_blank" href={profile.url}>{profile.url}</a></li>)}
      </ul>
    </div>
  </div>
};

export default Info;
