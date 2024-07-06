import { Button } from "~/components/ui/button";
import { type Button as ButtonProps } from "~/components/store/layout/header/header";
import { Separator } from "~/components/ui/separator";

const HeaderDesktop = ({ buttons }: { buttons: ButtonProps[] }) => {
    return (
        <>
            <Button variant={buttons[0].variant} className="font-semibold">
                {buttons[0].icon}
                {buttons[0].content}
            </Button>
            <div className="ml-auto hidden h-8 items-center gap-6 md:flex">
                <Button variant={buttons[1].variant} className="font-semibold">
                    {buttons[1].icon}
                    {buttons[1].content}
                </Button>
                <Separator orientation="vertical" />
                <div className="flex items-center gap-4">
                    {buttons.slice(2).map((btn) => (
                        <Button
                            key={btn.content}
                            variant={btn.variant}
                            className="font-semibold"
                        >
                            {btn.icon}
                            {btn.content}
                        </Button>
                    ))}
                </div>
            </div>
        </>
    );
};

export default HeaderDesktop;