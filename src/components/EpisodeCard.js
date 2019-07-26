import React from 'react';
import { Card, Icon } from 'semantic-ui-react';

export default function EpisodeCard ({ episode }) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{episode.name}</Card.Header>
        <Card.Meta>
          <span>{episode.air_date}</span>
        </Card.Meta>
        <Card.Description>
          Episode: {episode.episode}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
          {episode.characters.length} Characters
        </a>
      </Card.Content>
    </Card>
  );
}