export default function Footer() {
    return (
        <footer className="py-8 text-center border-t border-green-500/20 bg-background">
            <div className="container mx-auto">
                <p className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} <span className="font-semibold text-foreground">Shri Dhatri P M</span>. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}