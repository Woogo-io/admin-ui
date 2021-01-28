import React, { FC, PropsWithChildren } from 'react';

import { default as Card } from './Card';
import { default as CardBody } from './CardBody';

type InfoCardProps = {
  title: string;
  value: string;
};

const InfoCard: FC<PropsWithChildren<InfoCardProps>> = ({
  title,
  value,
  children,
}: PropsWithChildren<InfoCardProps>) => {
  return (
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
};

export default InfoCard;
