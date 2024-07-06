import { Separator } from "~/components/ui/separator";
import { cn } from "~/lib/utils";
import { Link } from "@remix-run/react";
import { Facebook, Mail, ExternalLink as ExternalLinkIcon } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="flex flex-col md:flex-row justify-center items-center p-5 gap-12 md:px-[4%] lg:px-[7%] xl:px-[8%] 2xl:px-[10%] border-t-2 border-border/40 text-sm">
            <section className="flex flex-col items-center gap-2 order-3 md:order-1">
                <p className="font-semibold text-[15px] tracking-tight order-3 md:order-1 mt-2 md:mt-0">
                    © Vinařství Plchut {new Date().getFullYear()}
                </p>
                <Separator className="mt-1 md:mt-2 order-2" />
                <div className="flex items-center space-x-4 font-medium h-8 order-1 md:order-3">
                    <InternalLink href="/Publicita-projektu_Plchut.pdf">
                        Program rozvoje venkova
                    </InternalLink>
                    <Separator orientation="vertical" />
                    <InternalLink href="/ochrana-osobnich-udaju">
                        Ochrana osobních údajů
                    </InternalLink>
                </div>
            </section>
            <section className="flex flex-col gap-2 items-center md:ml-auto order-1 md:order-2">
                <p className="font-semibold text-[15px] tracking-tight">Kontakt</p>
                <Separator className="mt-1" />
                <div className="flex flex-col items-center gap-5 md:gap-2">
                    <ExternalLink
                        href="https://www.facebook.com/profile.php?id=100057543485202"
                        target="_blank"
                        rel="external"
                        className="mt-2 md:mt-0"
                    >
                        <Facebook size="20px" />
                        Vinařství Plchut
                    </ExternalLink>
                    <ExternalLink href="mailto:vinarstviplchut@seznam.cz">
                        <Mail className="size-5 mr-2" />
                        vinarstviplchut@seznam.cz
                    </ExternalLink>
                    <ExternalLink href="https://vinarstviplchut.cz" target="_blank">
                        <ExternalLinkIcon className="size-5 mr-2" />
                        vinarstviplchut.cz
                    </ExternalLink>
                </div>
            </section>
        </footer>
    );
};

const linkClasses =
    "text-muted-foreground hover:text-foreground hover:underline transition-colors";

const InternalLink = ({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) => {
    return (
        <Link to={href} className={linkClasses}>
            {children}
        </Link>
    );
};

const ExternalLink = ({
    href,
    target,
    rel,
    children,
    className,
}: {
    href: string;
    target?: string;
    rel?: string;
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <a
            href={href}
            target={target}
            rel={rel}
            className={cn(linkClasses, "font-semibold flex items-center", className)}
        >
            {children}
        </a>
    );
};