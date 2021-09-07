import React, { FC, PropsWithChildren } from 'react';

import Card from './Card';
import CardBody from './CardBody';
import theme from '../../theme/default';

export type InfoCardProps = {
  title: string;
};

const InfoCard: FC<PropsWithChildren<InfoCardProps>> = ({
  title,
  children,
}: PropsWithChildren<InfoCardProps>) => (
  <Card>
    <CardBody className="flex items-center">
      <div>
        <p className={theme.infoCard.title}>
          {title}
        </p>
        <p className={theme.infoCard.children}>
          {children}
        </p>
      </div>
    </CardBody>
  </Card>
);

export default InfoCard;
