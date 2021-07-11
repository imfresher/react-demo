import React from 'react';
import { FormattedMessage } from 'react-intl';
import { secondsToLabel } from 'utils/LocaleUtil';
import { videos } from 'services/fake';

export default function RelatedVideos({ className, children, ...props }) {
  return (
    <div className="Related__Videos VideoList">
      { videos.map(video => (
        <div className="Video card mb-3 pb-3" key={ video.id }>
          <div className="row no-gutters">
            <div className="Video__media card-media col-md-4">
              <a href={ `/watch?v=${video.code}` }>
                <img src={ video.poster } alt={ video.title } />
              </a>
              <small className="Video__time">{ secondsToLabel(video.time) }</small>
            </div>
            <div className="col-md-8">
              <div className="card-body p-0 pl-2">
                <h4 className="Video__title">
                  <a href={ `/watch?v=${video.code}` }>{ video.title }</a>
                </h4>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="group">
                    <div>{ video.views } <FormattedMessage id="common.views" /></div>
                    <div>{ video.author.name }</div>
                  </div>
                  <small className="text-muted">{ video.time }</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      )) }
    </div>
  );
}
