import {
  BsCalendar3,
  BsCardChecklist,
  BsClockHistory,
  BsImages,
  BsMusicNoteList,
  BsPeople,
  BsPhone,
  BsShareFill,
  BsTranslate,
} from 'react-icons/bs'
import { GiSelfLove } from 'react-icons/gi'
import { IoMdNotificationsOutline, IoMdShareAlt } from 'react-icons/io'
import { IoNavigateCircleOutline } from 'react-icons/io5'

export const feature = [
  {
    title: 'Hitungan Mundur',
    desc: 'Jangan sampai terlewatkan moment indah kamu, hitung mundur tanggal acara pernikahanmu.',
    icon: <BsClockHistory />,
  },
  {
    title: 'Design Modern dan Responsif',
    desc: 'Say good bye untuk design jadul. biar undanganmu makin wow.',
    icon: <BsPhone />,
  },
  {
    title: 'Menambahkan ke kalendar',
    desc: 'Para tamu bisa menyimpan tanggal acara dan lokasi dengan google calendar.',
    icon: <BsCalendar3 fontSize='1.5em' />,
  },
  {
    title: 'Support Native Share',
    desc: 'Kamu bisa share undanganmu secara mudah dengan experience share apps.',
    icon: <BsShareFill />,
  },
  {
    title: 'Notification Ready',
    desc: 'Kamu bisa mendapat informasi aktifitas undanganmu secara realtime.',
    icon: <IoMdNotificationsOutline />,
  },
  {
    title: 'Share Ekslusif',
    desc: 'Bisa juga membuat share dengan nama Teman/Saudara/Keluarga agar lebih ekslusif.',
    icon: <IoMdShareAlt />,
  },
  {
    title: 'Gallery Foto',
    desc: 'Share moment indah kamu dengan pasanganmu dengan slideshow yang keren.',
    icon: <BsImages />,
  },
  {
    title: 'Navigasi Lokasi',
    desc: 'All in one navigasi lengkap, agar para tamu tidak tersesat saat ke tempat kamu.',
    icon: <IoNavigateCircleOutline />,
  },
  {
    title: 'Background Music',
    desc: 'Pilih musik sesuai keinginan kamu agar undanganmu lebih ekslusif dan romantis.',
    icon: <BsMusicNoteList />,
  },
  {
    title: 'Berbagi momen indah dan Ucapan',
    desc: 'Tamu undangan bisa berbagi momen dengan mengirimkan gambar dan ucapan.',
    icon: <BsPeople />,
  },
  {
    title: 'Amplop Digital',
    desc: 'Tamu undangan bisa mengirim amplop secara digital dengan mudah.',
    icon: <BsCardChecklist />,
  },
  {
    title: 'Bahasa Indonesia/Inggris',
    desc: 'Pilih undangan kamu menggunakan bahasa indonesia/inggris.',
    icon: <BsTranslate />,
  },
  {
    title: 'Love Stories',
    desc: 'Ceritakan Kisah Cinta kamu dengan leluasa.',
    icon: <GiSelfLove />,
  },
]
