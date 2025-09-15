import { Button } from 'antd'
import LgModal from '../../LgModal'
import { useModal } from '@/hooks/useModal'

export default function TestModal() {
    const { openModal } = useModal();
    const modalName = 'LgModal';
  return (
    <>
        <Button onClick={() => openModal(modalName)}>Open modal</Button>

        <LgModal name={modalName}>
            Demo modal
        </LgModal>
    </>
  )
}
