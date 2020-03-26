var getname = prompt("Welcome, calculate your GPA or CGPA, input your course units and grades, for courses greater than 16, click the add button to add more rows Thank you......... \n\nPLEASE TELL US YOUR NAME: ");
//var yourdept = prompt("your department? ");
if (getname == null || getname == "") {
    getname = "John Doe";
}
$(document).ready(function() {

    $("figure").fadeOut(2000);
    $('figure').slideDown(2000);
    $('button').focusin(2000);


});



var GP = document.getElementById.bind(document);

calculate = {
    openslidemenu: function() {
        GP('side-menu').style.height = '380px';
        GP('side-menu').style.width = '100%';
        GP('side-menu').style.padding = '63px 10px 5px 10px';
        window.scrollTo(0, 200);
    },
    closeslidemenu: function() {
        GP('side-menu').style.width = '0';
        GP('side-menu').style.height = '0';
        GP('side-menu').style.padding = '0';

    },
    making: function() {
        setTimeout(function() {
            alert("Hey " + getname.toUpperCase() + " this feature is still in the making")
        }, 2000);
    }

}

const calculateGp = () => {

    //variable declarations for units####
    //get units from inputs
    var s, aa, z, a, b, c, d, e, f, g, h, i, aaa, ab, ac, ad, ae, af, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at, au, av, aw, ax, ay, az, ba, bb, bc, bd, be, bf, bg, bh, bi, bj, j, k, l, m, n, o, p, q, r, t, u, v, w, x, y, jj, kk, ll, mm, mn, mo, mp, mq, mr, ms, mt, m1, m2, m3, m4, m5, m6, m7, m8, m9, b1, b2, b3, b4, b5, b6, b7, b8, b9;
    a = GP("getinta").value;
    b = GP("getintb").value;
    c = GP("getintc").value;
    d = GP("getintd").value;
    e = GP("getinte").value;
    f = GP("getintf").value;
    g = GP("getintg").value;
    h = GP("getinth").value;
    i = GP("getinti").value;
    aaa = GP("getintj").value;
    ab = GP("getintk").value;
    ac = GP("getintl").value;
    ad = GP("getintm").value;
    ae = GP("getintn").value;
    af = GP("getinto").value;
    ah = GP("getintp").value;
    ai = GP("getintq").value;
    aj = GP("getintr").value;
    ak = GP("getints").value;
    al = GP('getintt').value;
    am = GP('getintu').value;
    an = GP('getintv').value;
    ao = GP('getintw').value;
    ap = GP('getintx').value;
    aq = GP('getinty').value;
    ar = GP('getintz').value;
    as = GP('getint1').value;
    at = GP('getint2').value;
    au = GP('getint3').value;
    av = GP('getint4').value;
    aw = GP('getint5').value;
    ax = GP('getint6').value;
    ay = GP('getint7').value;
    az = GP('getint8').value;
    ba = GP('getint9').value;
    bb = GP('getint10').value;
    bc = GP('getint11').value;
    bd = GP('getint12').value;
    be = GP('getint13').value;
    bf = GP('getint14').value;
    bg = GP('getint15').value;
    bh = GP('getint16').value;
    bi = GP('getint17').value;
    bj = GP('getint18').value;

    //variable declaration for grade
    //---------------------------------------------
    // Oba John Obinna
    //---------------------------------------------
    j = GP("gradea").value;
    k = GP("gradeb").value;
    l = GP("gradec").value;
    m = GP("graded").value;
    n = GP("gradee").value;
    o = GP("gradef").value;
    p = GP("gradeg").value;
    q = GP("gradeh").value;
    r = GP("gradei").value;
    t = GP("gradej").value;
    u = GP("gradek").value;
    v = GP("gradel").value;
    w = GP("gradem").value;
    x = GP("graden").value;
    y = GP("gradeo").value;
    jj = GP("gradep").value;
    kk = GP("gradeq").value;
    ll = GP("grader").value;
    mm = GP("grades").value;
    mn = GP("gradet").value;
    mo = GP("gradeu").value;
    mp = GP("gradev").value;
    mq = GP("gradew").value;
    mr = GP("gradex").value;
    ms = GP("gradey").value;
    mt = GP("gradez").value;
    m1 = GP("grade1").value;
    m2 = GP("grade2").value;
    m3 = GP("grade3").value;
    m4 = GP("grade4").value;
    m5 = GP("grade5").value;
    m6 = GP("grade6").value;
    m7 = GP("grade7").value;
    m8 = GP("grade8").value;
    m9 = GP("grade9").value;
    b1 = GP("grade10").value;
    b2 = GP("grade11").value;
    b3 = GP("grade12").value;
    b4 = GP("grade13").value;
    b5 = GP("grade14").value;
    b6 = GP("grade15").value;
    b7 = GP("grade16").value;
    b8 = GP("grade17").value;
    b9 = GP("grade18").value;





    if (a == "" || j == "") {
        a = 0;
    }
    if (b == "" || k == "") {
        b = 0;
    }
    if (c == "" || l == "") {
        c = 0;
    }
    if (d == "" || m == "") {
        d = 0;
    }
    if (e == "" || n == "") {
        e = 0;
    }
    if (f == "" || o == "") {
        f = 0;
    }
    if (g == "" || p == "") {
        g = 0;
    }
    if (h == "" || q == "") {
        h = 0;
    }
    if (i == "" || r == "") {
        i = 0;
    }
    if (aaa == "" || t == "") {
        aaa = 0;
    }
    if (ab == "" || u == "") {
        ab = 0;
    }
    if (ac == "" || v == "") {
        ac = 0;
    }
    if (ad == "" || w == "") {
        ad = 0;
    }
    if (ae == "" || x == "") {
        ae = 0;
    }
    if (af == "" || y == "") {
        af = 0;
    }

    if (ah == "" || jj == "") {
        ah = 0;
    }
    if (ai == "" || kk == "") {
        ai = 0;
    }
    if (aj == "" || ll == "") {
        aj = 0;
    }
    if (ak == "" || mm == "") {
        ak = 0;
    }
    if (al == "" || mn == "") {
        al = 0;
    }
    if (am == "" || mo == "") {
        am = 0;
    }
    if (an == "" || mp == "") {
        an = 0;
    }
    if (ao == "" || mq == "") {
        ao = 0;
    }
    if (ap == "" || mr == "") {
        ap = 0;
    }
    if (aq == "" || ms == "") {
        aq = 0;
    }
    if (ar == "" || mt == "") {
        ar = 0;
    }
    if (as == "" || m1 == "") {
        as = 0;
    }
    if (at == "" || m2 == "") {
        at = 0;
    }
    if (au == "" || m3 == "") {
        au = 0;
    }
    if (av == "" || m4 == "") {
        av = 0;
    }
    if (aw == "" || m5 == "") {
        aw = 0;
    }
    if (ax == "" || m6 == "") {
        ax = 0;
    }
    if (ay == "" || m7 == "") {
        ay = 0;
    }
    if (az == "" || m8 == "") {
        az = 0;
    }
    if (ba == "" || m9 == "") {
        ba = 0;
    }
    if (bb == "" || b1 == "") {
        bb = 0;
    }
    if (bc == "" || b2 == "") {
        bc = 0;
    }
    if (bd == "" || b3 == "") {
        bd = 0;
    }
    if (be == "" || b4 == "") {
        be = 0;
    }
    if (bf == "" || b5 == "") {
        bf = 0;
    }
    if (bg == "" || b6 == "") {
        bg = 0;
    }
    if (bh == "" || b7 == "") {
        bh = 0;
    }
    if (bi == "" || b8 == "") {
        bi = 0;
    }
    if (bj == "" || b9 == "") {
        bj = 0;
    }

    s = a * 1 + b * 1 + c * 1 + d * 1 + e * 1 + f * 1 + g * 1 + h * 1 + i * 1 + aaa * 1 + ab * 1 + ac * 1 + ad * 1 + ae * 1 + af * 1 + ah * 1 + ai * 1 + aj * 1 + ak * 1 + al * 1 + am * 1 + an * 1 + ao * 1 + ap * 1 + aq * 1 + ar * 1 + as * 1 + at * 1 + au * 1 + av * 1 + aw * 1 + ax * 1 + ay * 1 + az * 1 + ba * 1 + bb * 1 + bc * 1 + bd * 1 + be * 1 + bf * 1 + bg * 1 + bh * 1 + bi * 1 + bj * 1; //sum of unit loads
    aa = a * j + b * k + c * l + d * m + e * n + f * o + g * p + h * q + i * r + aaa * t + ab * u + ac * v + ad * w + ae * x + af * y + ah * jj + ai * kk + aj * ll + ak * mm + al * mn + am * mo + an * mp + ao * mq + ap * mr + aq * ms + ar * mt + as * m1 + at * m2 + au * m3 + av * m4 + aw * m5 + ax * m6 + ay * m7 + az * m8 + ba * m9 + bb * b1 + bc * b2 + bd * b3 + be * b4 + bf * b5 + bg * b6 + bh * b7 + bi * b8 + bj * b9;
    z = aa / s;

    if (s == "") {
        alert("Hello " + getname + ", please input your course grades and Credit Loads!");
        $("#getinta").focus().attr("border", "6px solid");

    } else {
        if (z >= 4.5) {
            GP('disp').innerHTML = "Hello " + getname.toUpperCase() + ", <br>You have a GP of <span style='color:gold' > " + z.toFixed(2) + "</span><br><p>Excellent result you're a <u>first class Material</u></p>";
            console.log(z);
            calculate.openslidemenu();
        }
        if (z >= 3.5 && z < 4.50) {
            GP('disp').innerHTML = "Hello " + getname.toUpperCase() + ", <br>You have a GP of <span style='color:gold'> " + z.toFixed(2) + "</span><br><p>Nice result, you're a <u>Second Class Upper</u></p>";
            calculate.openslidemenu();
        }

        if (z >= 2.5 && z < 3.5) {
            GP('disp').innerHTML = "Hello " + getname.toUpperCase() + ", <br> You have a GP of " + z.toFixed(2) + "<br><p>You're a Second Class <u>lower division</u></p>";
            calculate.openslidemenu();
        }
        if (z >= 1.5 && z < 2.5) {
            GP('disp').innerHTML = "Hello " + getname.toUpperCase() + ", <br>You have a GP of <span style='color:red'>" + z.toFixed(2) + "</span><br><p>Poor result, you're a <u>Third Class </u></p>";
            calculate.openslidemenu();
        }
        if (z >= 0 && z < 1.5) {
            GP('disp').innerHTML = "Hello " + getname.toUpperCase() + ", <br>You have a GP of <span style='color:red'>" + z.toFixed(2) + "</span><br><p>Fair result, you're a <u> PASS</u></p>";
            calculate.openslidemenu();
        }

    }
}