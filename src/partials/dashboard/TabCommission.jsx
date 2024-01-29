import React from 'react';
import { Link } from 'react-router-dom';

const dataCommission = [
  { nom: 'Item 1', date: '2024-01-29'},
  { nom: 'Item 2', date: '2024-01-29'},
  { nom: 'Item 3', date: '2024-01-29'},
  { nom: 'Item 4', date: '2024-01-29'},
 
];

function TabCommission() {
  return (
    <div>
      <table id="tableau">
        <thead>
          <tr>
            <th>Pourcentage</th>
            <th>Date d'insertion</th>
          </tr>
        </thead>
        <tbody>
          {dataCommission.map((item) => (
            <tr key={item.nom}>
              <td className="w-1/4 sm:w-1/6 md:w-1/4 lg:w-1/6">{item.nom}</td>
              <td className="w-1/4 sm:w-1/6 md:w-1/4 lg:w-1/6">{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TabCommission;
