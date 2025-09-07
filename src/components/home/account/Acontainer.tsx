
import Sec from './Sec';
import Mus from './Mus';
import Des from './Des';
import Dev from './Dev';
import React from 'react';

export default function Acontainer() {
  return (
    <div className="flex dark:text-background text-foreground flex-col gap-5 mt-7 w-full justify-center items-center">

        <h2 className="text-3xl md:text-4xl font-bold text-center my-12 text-customPurple">My Skills</h2>

      <div className="flex gap-5 flex-col md:flex-row">
        <Dev />
        <Des />
      </div>
      <div className="flex gap-5 flex-col md:flex-row">
        <Mus />
        <Sec />
      </div>
    </div>
  );
}