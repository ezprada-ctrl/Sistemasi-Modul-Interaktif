import type { ReactNode } from 'react';
import Icon, { type IconName } from './Icon';

// Keadaan kosong yang menuntun: bukan sekadar "Belum ada ...", tapi apa yang
// sebaiknya dilakukan berikutnya. Dipakai di tempat yang kosongnya NORMAL
// (bagian baru, belum impor) - bukan buat data yang memang belum terekam
// (Command Center), itu tetap cukup satu kalimat.
export default function EmptyState({ icon, judul, children, aksi }: {
  icon: IconName; judul: string; children?: ReactNode; aksi?: ReactNode;
}) {
  return (
    <div className="empty-state" role="status">
      <span className="empty-state-ikon"><Icon name={icon} size={20} /></span>
      <div className="empty-state-judul">{judul}</div>
      {children && <p className="empty-state-isi">{children}</p>}
      {aksi && <div className="empty-state-aksi">{aksi}</div>}
    </div>
  );
}
