import { PropsWithChildren } from 'react';

const FooterContactCol = ({
  title,
  children,
}: { title: string } & PropsWithChildren) => {
  return (
    <div className="space-y-4">
      <div className="caption">{title}</div>
      <div>{children}</div>
    </div>
  );
};

const FooterContactSection = () => {
  return (
    <div className="grid grid-cols-1 gap-x-12 sm:grid-cols-4 lg:gap-x-24">
      {/* col 1 */}
      <FooterContactCol title="Location">
        Al-Hizam Park Al-Semairi, Yanbu Al Bahr 46455 Riyadh Saudi Arabia
      </FooterContactCol>

      {/* col 2 */}
      <FooterContactCol title="Working hours">
        <>
          Sun until Thurs: 4:00PM Fri & Sat: 2:30PM
          <br />
          <br />
          Gates Close at: Sat until Wed: 12:00AM Thu & Fri: 12:30AM
        </>
      </FooterContactCol>

      {/* col 3 */}
      <FooterContactCol title="Guest service call">
        <>
          cc@thegroves-sa.com
          <br />
          920001672
          <br />
          <br />
          +966556631309
        </>
      </FooterContactCol>
    </div>
  );
};

export default FooterContactSection;
