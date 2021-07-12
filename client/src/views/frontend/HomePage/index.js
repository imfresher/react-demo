import React from 'react';
import { FormattedMessage } from 'react-intl';
import { secondsToLabel, timeSince } from 'utils/LocaleUtil';
import { viewsLabel } from 'utils/VideoUtil';
import FrontendLayout from 'views/layouts/FrontendLayout';
import { videos } from 'services/fake';

function HomePage(props) {
  return (
    <FrontendLayout>
      {/* <h1><FormattedMessage id="HomePage.title" /></h1>
      <p><FormattedMessage id="doc.Lifecycle.text" /></p> */}
      <div className="VideoList px-5">
        <div className="container-fluid">
          <div className="row">
          { videos.map(video => (
            <div className="col-3" key={ video.id }>
              <div className="Video card mb-4">
                <div className="Video__media card-media">
                  <a href={ `/watch/${video.id}?v=${video.code}` }>
                    <img src={ video.thumbnail } alt={ video.title } />
                  </a>
                  <small className="Video__time">{ secondsToLabel(video.time) }</small>
                </div>
                <div className="card-body">
                  <h3 className="Video__title">
                    <a href={ `/watch/${video.id}?v=${video.code}` }>{ video.title }</a>
                  </h3>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="group">
                      <p>{ viewsLabel(video.views) } <FormattedMessage id="common.views" /></p>
                      <span>{ video.author.name }</span>
                    </div>
                    <small className="text-muted">{ timeSince(video.created_at) } <FormattedMessage id="common.ago" /></small>
                  </div>
                </div>
              </div>
            </div>
          )) }
          </div>
        </div>
      </div>
    </FrontendLayout>
  );
}

export default HomePage;
