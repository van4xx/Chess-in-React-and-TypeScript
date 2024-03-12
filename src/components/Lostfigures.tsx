import React, { FC } from 'react';
import { Figure } from './models/figures/Figure';
import { within } from '@testing-library/react';

interface LostfiguresProps {
    title: string;
    figures: Figure[]
}

const Lostfigures: FC<LostfiguresProps> = ({title, figures}) => {
    return (
        <div className="lost">
            <h3>{title}</h3>
            {figures.map(figure => 
                <div key={figure.id}>
                    {figure.name} {figure.logo && <img width={20} height={20} src={figure.logo}/>}
                </div>
                )}
        </div>
    );
};

export default Lostfigures;