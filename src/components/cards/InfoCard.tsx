import React, { FC, PropsWithChildren } from 'react';

import Card from './Card';
import CardBody from './CardBody';

export type InfoCardProps = {
  title: string;
  value: string;
};

const InfoCard: FC<PropsWithChildren<InfoCardProps>> = ({
  title,
  value,
  children,
}: PropsWithChildren<InfoCardProps>) => (
  <Card>
    <CardBody className="flex items-center">
      {children}
      <div>
        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
          {title}
        </p>
        <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
          {value}
        </p>
      </div>
    </CardBody>
  </Card>
);

export default InfoCard;
