import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Badge} from "@nextui-org/react";
import Simon from "../../images/team/Simon.jpg";

export default function App() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button className="text-tiny text-white bg-white/20" variant="flat" color="default" radius="md" size="sm" onPress={onOpen}>Details</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <div className="flex justify-left px-5 pt-5">
                    <Badge content="CON" size="lg" className="bg-[#e2b203]">
                        <img
                            width={128}
                            height={128}
                            src={Simon.src}
                            alt="Simon"
                            className="rounded-lg"
                        />
                    </Badge>
                    <p className="ml-4 mt-10 text-3xl">Simon</p>
                </div>
              </ModalHeader>
              <ModalBody className="px-10">
                <p>Introducing Simon, our creative force and Cutter/Content Creator extraordinaire.</p>
                <p>Simon brings ideas to life through engaging and visually stunning content. Whether it's cutting-edge videos or compelling graphics, Simon's expertise ensures that our projects captivate and inspire.</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
