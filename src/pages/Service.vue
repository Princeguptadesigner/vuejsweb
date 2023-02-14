<template>
  <HeroBannerInner
    title="Our work is delivered by the best team in the world"
    subtitle="Our Services"
  />

  <div class="help-desk-area pt-100 pb-75">
    <div class="container">
      <div class="section-title">
        <span class="sub-title">How Can Help You</span>
        <h2>We’re helping teams do their best work</h2>
      </div>
      <div class="row">
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="single-help-desk-box">
            <div class="icon">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFIAAABRCAYAAABBuPE1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA1CSURBVHgB7V1Pc9vGFX+7oNyOLcXMoRnPRHLgQ2csy53Sn8DQrdOJE0pWz6Y/gaRPYOqWm6RPYPrcyJabtJOeBH8Ca6a2nJsRy5nptIcwnsSTxAS272F3wSUIkABJCGKj35gmAO7izw+7b9/+3gPEYApweWl1WwDbGFaOCdF8dfRwC0oAhylAFhLDcow1oCRUYJrAoC0EHPZvhhp+VaFElE5k1a6HBLS9/fbQwkji6+d7y/HN80u3D5BMZ1j1XMfKiVK79uWl23fmZq2Xcxespx9e+0stqYy++KxIK0/7V8d6mXascVAakUSiAGhhK6MLtzkLDswLXFis1xewpeGFf5djtzaVp3oL11YbeiPtl/PgQB2rGj/WJMCgBEQk9gNtoNhlDO7gqdnxH5lgW6+OPm/Gt89fX23ib/cS9ucxELs4CN1TJPYcKxB8+dujvx7CBHDiRMZJJHIEEzYu3kkqj2VdDuIxF5brDbjo+etrDhdBLQB2Rw0+faBjBTx0kzTpbeGzlddff+7CmDhRIpNI1C0MuyNtN8lsYUt68PpZ/ou0sdv6LNgw92ceC0lvGmQSCY1Xz/cewBg4MSIHkagxf/32Dp7QR1bAt7wJdDn7at3uWNZ99EMff/v8853eY02WzEQiaeS7MAM2sybjm6HNqwK3HkXrKbbupBEjE7u5vzKszg8/wWGS+9TjRy4s3q7jOL4OGXyycYA28SM4BUASzfOoMss6GFZn7gLA7NLtQ6y7e3z0sKW3W3oBbdR9bJ+f4aINxaN28YNr9pv/vngMJSG8XuzOMAKwG1/Cbla/+MFiFa/hn2pbvyhAIyUI8QQKAGOMWnxoMvCuYhd/2MxaV4CD9c7X8f7jt8APwy4mPIDOIYOvvKz76blemnYGYjdrXbyAm72zKLFz/PzhZmX+et0RIiLRw5Hy7igjZVYs/GHtIgQiPB4eK1MXF/Cxg1dAtszpbmXG9wyWueXiwgMGX7SG7k8wW1dnQdhFm5ADyisgM0A3c2P+6tpjdPKtdeMIW0WSeAlHUQiCul63fH+g5CXgTzYShCfM6KQdGAz6HUfoW/ep3sD9cha1QLyZ69VavmkoeRRYLxqYGBcbHO+Mo383jWcRmOHcMWYsLe/rfS+trCRjJkagcPG/TfzGixDL8hOuu0bVBtUbRKZqLNrVqc79wuuQE3IfZFaAOsVNGrX13fCgaDCI/LZBrdEg0VZbyKfcZPClm1Cctu2o7n9f1bElmc4NBm6i0oMtqoU2WjrsjNF3C3IC7SxOQcPjVQuV0cgh1sudCh6QbJM8g8eDWiOSoAkhuOilrTAYLH0RyQLqNwDIdomarD9HvutyUnlqUSi/uWrgcD78fb02Y0F0jMHn14/C1J+FpdWXvmVFHyZMH03sp9VDG9eAbnf2sO0OJVFDluPL0O1djmypyaA5fLR8znpqni+S/BRyoBAiZUtkdtrvVhC4kAphzLfF3awkasjy4q6x5V5aWR+FkPT9QO3K4mrmicNJKOQeSDsmgf5pWreRtpE5atVNsYlDIbv5LQ+keXDI/0yylSShoW55l3xD4yycQY0gDcUTKcA9Ptq7m61wxZC/gjFnPdRtmXLtZmm/blIp5am09PrC4koLOLMhJ05ZFJHZxrIHYyEw1KPAhoJxyogUpmM88QBVkThlRAaesWzDWLCMm8ILvymnjEjuGcvjBqf+2F00b1AxmOhgg0GoeyjaNn1zI4MGSlaNWNHW8fOkAaiCds2n1kNiACrqTjNtZjIIanqop304+/hHqtpOEUeYgP460RbJRGZ9r5HkoykfMJoDA7y3ASOhcge6U183rRQpXzCAxO9+E3wPWY8IBUEkXACGRu3hPlplB1ulIkKsC/jz/qAW1X/ccM7dVKt4Y6zUOT3Otu5064WpMGHrx9AIhmrZk/Zh9snASESSHDbDrW0SRd+h+PDvfgfbS0otSfLRKD703nm+jiKCg3HmTUYSFdyii9+GkEwLxYePV7I451iuroQLhWAL9UlvQA1H6ZptPN8bMAZGInLGsmjaVVfLDirOu6iEfAo5whQdztyFxfomcE5qdVgPxdFHqA3eYIf7pObUyE6CtJdI5q0WwLutJCVctUIq2zC27jL4+07a8WUmhjwuInXunxW5iVSpIA1jE4qvbNssI1DdSarLuIWtLZpL22ZkUW977xe+gf0JB5kvG0hQuzs7CXVG2naonHXd7Rzou4GMWmITBiGjpJcV+Qcb4wQS7CCFKpZfH+0lDhKvMLZMv/fVY2GLCIkhxfqSkt+QTNoPje6eUZjcIuoNDfWxzeOT2Mvgb00YgFhrbOWVzJKQi0hyb8wTIDuId/MKtkDKr9myfvRvDAtV0O+h/RShQkPZFMvHz/ZWMESr5f9qaH8VKAaDnysgCY0IN9CW28UKlctkS6WQq9cm4qwz9KOEWnaPEwYIjXCAsfiBJpIITFdxQpv1qTLmVXmy7JBcm7QLtTFu4r/jT/X+hY8tOyUnBwXcMKsMP+28MhshbJGsOyiNmjJt5mVmbpFygGG2PDDbSifxk20VrNpQ3dBW3w01aNyXYdVeeOhqCMa7TroltiEFRB5+vFFIJISKj+hqlthCm5evrd6DMZCJSGWzGmrV4287iaOhJFGY9rGt4i3mBeN+Zg+SyKRur+0nCauXF1dHdMiHg8hkwDb1OpGZR8iNIxORMyxycEP45/ujbjJEEJGIxAUYrPrifezKN+hbRv70oEEttH/WMn81nGlEBAecJab65YEZNzJBjUNAsN49fzh8+eLhNzAisnXtCjeNvE32pT+mIdaN5ZW4D4eE4j6s5e5+aNbSbZWU/UC5N2ZuIxdsZHGXHH3aJ8VfcBx4eckgNG7vicTKj/4yjIFMRB7/a28fBxfy/KO0NzOmIY0/0wSkhgjIrpGjrFaxzqyjf0NftBEvT8lWFN2DHKBWvbC0tk354kYaDhJnHRCBaSR6YyboZ3bI1eDSwJb4kR6pul2hU4MohWRoztBhdzEw7GQ4ssftZgOje6QeebjspkxHVQujwVDHW0T4L4aQTPkDlZkciYRcfmT8iYFuqkdgnkgVxseDKItBwsZPA/3LxEGuYlkqs4zZ0UZKjiLfFt001r15dhEkEjITSbmTcxf4UzMT6/2f+UW5dM7rlgzn3ANg/m4KuT2t8SZKctJFYcY8mMFFGA7t5L+PXkCTehKf8ZcNMidOIiETkZeX1jaw5KPojpPMhK6D7tpKR3RVcRwNP0n0yXC7KSx4PbaU08wlaoU2uSOUSkKzHsgOjwTj+OyKfFQiExcf0Cxs0iQSMtnIQPg2Y5Lz8G52/JXjPltVQZ/MV6luoonukC1F2gqW6+Ay/zTmY/bMJGhAw9mN678Lu2/aEw7VJHemA8PhSW2xAQUhU4usnBNN0KIntpafEspgq6Sus2lsasgZjv9SfpskhupMK74PebHipl4nfbL3GFAz00qidJiCU7WzIBORcvpmiArSuPdBkiPM3Js4lKOerM7ERRHjYaJM3VCUGMLN7P68fvawubC0qp/IcuavrjlJooKye1dU8hJ+KCtXfC8D9ucwbPBF4sWSC0OBM73eoxGS/QxgyCCGFyN49hTmCSOXsEuiAiolYVYZswS1yiuXr9/GGQo0sTlQ2GFZ+3mKUDdpP8rvo/oOKS9vzgW7M++s7jMvMVGE7CdMQMUuEpllNI3YI70qdNqDVprjHMVnOM44zGcD0Qsw1mnkvQJTgJFkNI2K75P8pLtnkvPdSLOhs+dZM3Rr4g9YmutCjC37l4HcRFKXMwaeMNxAswel73WFjQQwgzDy5yzBe+bvuG2/6Dz2ojBSggANPERcGJ9Bc0DkSgKyy/YzQmzT0wHYjRtyGic2K2/9jOl/pw8jJwgMaTm2YXuHQg0sOzDFKC2JKk86yDRgsikrnG2KANYHFRklHWQaMFEip8HfKwpT8QKlaYDZImvq0dszZEaYXRcumUSSj9eAM+QAi5bOuvaEYLZImqFMrUNcBjqW9UiHj3tG7UlkZf2agKJF5MJR1x44Pz5DOmQqd4g2p0fc1IpNYi2cIRN6ciwFPOHmawlQrH1UxJvs/t8Q5iiZCbcB2wnH7/ANUKJnaueKgt6yMu1g8klaR6+THEgZypEjlEDmGYbjAcmAtBC9QOnNf158dfF3i9+gxmiHLwg6QypIzGYBbB4f7X2mt7GkgjbGVjqzlROzlUIENa6fjMAAuQA2MBqIAbMGqCQCyu+BAU93TRKVgLXh7TvPG/ZuNA1V0IUTwvy1lTrpawTRYbvD3uc4f30NojekBH719dEjF0rG6ZgiMh5lV/zw287hsOKVilHGqFsmSieSnmYwsnTdLIJvmPlh5JrnfZNUESidSN+3HL2cy+Vi3bJzP09J7k+REH7gRCsBdyEzumXpgVAoGeXbSMPG5XlpsLKT7fg+ykKpRMbtY46q2k6Gg85psJOl/okB0z6CjIUfQB4wvAkqek52sl1i4K1UIsk+6kxgiN6yl2cHxiILXyZSGpHl2khu7ceeXhgNlM3G8wxUk8f/AEg8u4dAZes+AAAAAElFTkSuQmCC"
                alt="icon"
              />
            </div>
            <h3>Zero Configuration</h3>
            <p>
              Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Sed est
              non feugiat sagittis, donec.
            </p>
            <a href="/services-details" class="link-btn"
              >Learn More <i class="ph-caret-right"></i
            ></a>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6" data-aos-delay="100">
          <div class="single-help-desk-box">
            <div class="icon">
              <img
                src="data:image/png;base64,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"
                alt="icon"
              />
            </div>
            <h3>Code Security</h3>
            <p>
              Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Sed est
              non feugiat sagittis, donec.
            </p>
            <a href="/services-details" class="link-btn"
              >Learn More <i class="ph-caret-right"></i
            ></a>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6" data-aos-delay="200">
          <div class="single-help-desk-box">
            <div class="icon">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFIAAABSCAYAAADHLIObAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAiuSURBVHgB7VzbjtNGGP7/GadChbYpvanEQs1FVU4S6RNg7qoKibBLL3pFeALYJ2D3CRaeYM11YQmi6u2Gu96xSGVZiQvMHqRKlSAtB1UQz/Qfx85pHceT+KTiT9qNZzLj8XyZmf80Y4ASiQChgKia9erBT1mdITsLUpr0lFV61A2Q4vHrd6LZdpptKBgKRaQi8PNP2TXJ8DpIRV4oHJTS3t5cW4YCoTBEfn2ibhqc36MHqg1/I53uJ5ojVZwPrnv+z62mAwUAgwJAjcQKZ+sDJDoIcpG/db/cebJ2XP2pa5rmV/vEglnhfL1aq1ehACjEiDx6emGVPhoDWbaa2hLBJEJ9otChvLYE8QKQneuTLm8S0YuQM3InUk1pGlnPYQbQFD+e9xQ3IGcYSrCEQjqSRiEijUJf8NB1LUwIfcJYgz6WIEfkTiQoFceHBGgxkPfZW2E7Y1Qck0awy5glEa/QdLJUnkC8CDkTmfvUpvXxFX1UicX7O5t361p1T16ygbErdNneeXL3S8gRRZDawVR9BdMjd8ldACJ9dYYkNGhCMvaN9wmwATkjfyIlBiTUdHRCk8oGKhBKeAE5I38iOdz2r6qfv2fX41brdNg16E1p2YScURCFfP55YAIKyb7f2/wlcqoeOfVTjaF45CcdEjTHIWcUwkSUyK4G10TQ+rGT82NH5rEzC9cYE+u9DAG5WzUKhXFazJ25vERenRsDWQ49XlOQ60wllEuNzEVLDjg1UOLy9uadJSgACuVGO3pqvkFPdCPE0zMMsnZoDVjc2VyzoSDgUCD889fTjcNffXcfGCcpLE8QYyNSnMxGZLeMN+7P28/u/Q4FQiE95AFMcq91Dhk1Q2Ab3n1wnAJ6xgMUisgj39ZrUGE1eigzqhxKsUGOjPbuVrMFBUHuRM6dqFvIjYvETiMivBAOtVZKaIr37q29Z81crZvciPT9kMqha0EysMkvuZyXXzIXPfLoyYV6xeBKobaCPOVC88ILpJBzctTST7zfWqE89R250M6rsqrOwLcN+mEeRemgaSLzEakUalrfbgZpjwzE5d0/7rTGlLGpjBn4HkkBv7Tz9G6PZM8/yfkSXV4J8kgfXco6ypgpkWok0hy4F6QF4OLekzs3R8vNnV54FDgkvNFJILLUCFZraKhJeOz05esS5EqQRtIzt5+u3YSMkNnUVmsiaa2rQVpN4TASfQRqTrt9gK4PeOmuIJLwOKzCNt1L3TOoS7HxG8omh4yQGZG0Jq4EUlmNRCfCMaHCDf5l9dC/Rs11udX/drynx7unlIHtXSW7fQUyQiZEzp2pW0RiEEawI0aiB1YRdj/h1on5i0GSC9GKquuZjX1BZc2duGxBBsiESBT8WnBNa95EIeBsNNuBREZkRKK01LXyhDsx1BvecXseIeRDjpDUkDqRypNNI6Q3Gp24eh7Kh8Etek4MKR7Gqeq1IfujMovdGKkTObS+Cfd+/JqstS9L8NiecNFfZ+Hge6YVnZwGqRMpXdmTnFzGD1L5euWgk8LZ3errmpNQGVhLSXlPXXqnokeap+o1F/mK38Lg7ogW6GC4riJV1562/E/H/wOyyxfTsMtT2WnRYVClyJ7lJeTQVxboYLhuVbt+H6b/R8LHSGW9TIVIKSptRNeBWYFY7Y/I3na+WW8KaaDQjl2lf6LkXqBLunheZ43MGoWIIv4fUBKZEEoiE0JJZEIoiUwIJZEJoSQyIcRSyNU5mOqB7HfFumh8QY5a71oyYar4DGQIRyMiGUshH9x29zFBJ+4Tc2qjCR8hKO5zMW5ZPVubXPhCSA2f4mxQ7i/ykHvedQqxLru+BydtMETludJayrSIlEI+3stwK50f6/GIFIK19jKytWkpu7F/J1w0SqmdEEoiE0JJZELw1B/v5P5B1hBjttUhYhDSbEkpJ0byOkLYcXaFHT1Zr0tkY+Mp1K46kNTwkza1PfY8DaqtLDHWb7Xj4xPO6iJiCyG1Gxw9cajN21H3C/rqCZvPDvIVUnsbOFmrtKgRa1KhCuOKnMjIXVeQeG8MiAt6vujSR76tb0yKxxicr0qvHxAH5sAgCkXQV29qS9A/vhYJhC8gB6QVj4lutNvXUfXH4a57HqZEJ/SdFDEg3Es6odqhqtyoD+5C00CL+noVpoTL2fqgobJPj3Rm2PE6d3qhDVNASqPtbN1xYAocOTXfZjhd6GmWvpKuOZTWU8jhRzXaRkYccxB+bUGKoHYb+3PfNRFaqZ1y0O2rZjhWbf3Yt/jaoBv41wZf3Z93WEUXUyNSt6+lHpkQNEekYZNIaY3kOZA65D4BiLD2AlKFXl+1iCTnjwMZeWCG2013DQ5vU6+vY4mU8INJX5swEaKN8Ftim5IkXLDilXyzkZSwSaKvESPSWKLf5QpMBLfp39T62CAkqFCCux6v9GEqm5SwMZZm7WspbBJC1Bpp0+howUQwB5IDjbC41sbrvyE52LP2dSyROS3waqrakDGS6GuEsLHIAVCN4QRot0cXfak8cxNCp4Oh1uG68UKuvlQdrhsjZNsJyZulrwEipvYhCkO6MRbgz2wYWYCV48Kd9AY+MY5EN9ab+yTMm6O6JNncq9RuZL1wq3z6vvbahhKJIErYNGNuNw7TqyZ6lke83wFo2siYp1pfhgmbSC96t111ihbNkexZ+uohStg0uw1MBWd3c20pqoC/rbkx3KYnbCLrRUG6eHt3624rqgy5+s6Nvuphxr56KKd2QoiQ2hfseNo+2AgPkrRsYr4mtmIm5bhIoq/liEwIEcIGWzB6ZCgcsQ5axoSGQv4yQctm9r5GCJsHNmRsZfjCJpFlQq/d2ftaTu2EMDoize6m0imB3kuH9asZ8h61O51LrHvMbhpYM/UV0BxMeUSipLUJwwtoQaND3fOKIqhX1d1GN02bCon1dQQekRzYcgdEIrsU1AvYuWATrRP11tK5Mwu3iIizkAQQH8Y5q5hHX0to4D9A5zO8OcwmKwAAAABJRU5ErkJggg=="
                alt="icon"
              />
            </div>
            <h3>Team Management</h3>
            <p>
              Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Sed est
              non feugiat sagittis, donec.
            </p>
            <a href="/services-details" class="link-btn"
              >Learn More <i class="ph-caret-right"></i
            ></a>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6" data-aos-delay="300">
          <div class="single-help-desk-box">
            <div class="icon">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFIAAABSCAYAAADHLIObAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAhASURBVHgB7ZzNbttGEIBndqkUaOxGPRQNUDtlbvlxAeXWW+kHaKvY6TnOE1h+gshPEOcJbJ9bJwraQ2+Wn6Au0Di5la0doGiBVmnaSy3udJZ/YhTqJwl3yQT6AMEUSZH0cGdndmZ2ESqGe6npKiFuEqIHQC4AuuEBhB4QHCLQg/8C1fntcceHCoFQEc6zAGtSbvOmN+VPdk6DYLMqApVQAS4sra4LFN/zpvv8EfIJ8JA3fP70+K2fzxxsSCFa9Q8uw9M/Hh1AyZTeIheWVm4jYTuzy2f1vSv+VTu+3+llz9VqHwjh8VPfTlWeQaL2r0f3NqFEShXksBAV4MaTh99sTffbG20W4O3ke9nCTAW5cKnpCSkaiqAOFkAU51h1W+kOolvHR/d2kq91t1k/+65oYqzuSOrwlI1Ntk9cvLKyxhfaHlxC3eUze2CJvlI7yfOEgsxRL6tkW6IW4HvvinUS2ILcl0pbz2pqs3cYqf2FqzdaBHQHSoO2jh/e28Dht2r9MQg6J0d71/W2FuLcWbnPb7cx9jcAh//UguVEmAtXV/VvPCgJVLThsL+2nuo3qxcJ4YNpuG9L/3GFd5Pd82elblmRENlvZIutj3XjHzW5H/xSGxkt6Pn/5DZL8Xp0Lm7yNb34Mj7/T7fAMKiUmzRA1p51XLy6SvGx7vHDvWWwAN/zL/6j1dbne17U+xaWmh6S3I9P8WUQLPtDPmJotaXYTyw2Bbh88vibbnTNlZ/j/T2+5vtgAdaEHxLtcSadrB8eCqTvsPEY9H3dZD8L8eZgG3dG3ptgk1tr1BWJoJleQ9EBCNTn17XhdCLfszD8fMc/NWwjBamdZG6q7aBgK4402CaiX9JtllvSxRBSO5CyPfli4rP094h+8nuUcj+AYllcWu1xX7g1ysUSeTu1mrER2ALDrhBlWg2G4+qXA2HwfFRwC3wBlgW/rPbCpRte3uH8FqmEl3iY2qoiQmG+WdzyvDGn6Ht1YDxapUe+ZKPPLJT+2x0+Z2Ifqa3qcdyhF4Fu7UDSG3OKNhZjrS4bFo/b42htsf/M+ao94+WZCbIgZoIsiJkgC2KysSmA0CclbWlJO+MpQuAdNhxxKAzdeLcbjVLGkXMusvGJr40O3ef9bLXRZxO+m40qmcK4IHk4uM1CXIu+DYU/Qz81z/qiC1MTn0u519XjYY+f4bNJnsDrYlSQYWQJEiFqyAeroBtvrPGzHJhsmUYFySOBm0kblCSu+UdfH4JFOIrOgRCKAyGonfgdMIQ1Y2NbiJqTnzJOOcI5MIgVY6P5KFJzHcfzTx53umAQHf3huKoLFrEmSJFE4aXUBsjnnPRy0TnpbG7cdlavLD8y+YcLpRYGfctJOVgTpOI0hv5kLLc3KiT1KoSBBUA3/uoP7mcHa6r9JHY9Fj9Z7XHa8L7eJsF5jzEQeOwLznkQhtb+OUTojgyNkRIuJvqsgo0njzphKE77sWAB66pNFEwVJyT4Yp3TYToPw0JHVtn5v3jf7enu4VjLbSdUcqxN8PmazhfDC8FbavOxFlSQqgYtMi2POCVLu/nHqkPlBMmxjWiMHPEA4bsWf9ZgkH6oE6x8DBXDmrF5NejjyOCEZKov/nwKFaNyLRJBl6FQN/7WiAyO/qSttDvOepdFRftIR/t/fvylDgOjw/ukNd/wZaikILlV+iwwXT6TTct29L7oWPWobKohEljwYLAneFBVIWpmOZuCeCsFidg3WmqTh1VB6kJSBLme3pzUBOt7RveRfvQ504VpEYPiKltY8yPTOsxBksp/9s6LNTRZIlcILsIU1M6oTnAaFqrqxFeL72d1KFmOausCJwUbSelyEfh8Lc4R6QreUnxMa4LkhtgNPwR3ZT+4dvxob1LF2UujczQyCK7peyT3A0tYU+0TS2XVcWVtqtaZ0m6jGG2RSAM1qzea1i3p+YLLtsdhNq8t6EekMJ8M86fyh7krK7tgE8Qv02ch9SMYxKggHUdtBafiZpxL4VQAlhVL9B1FU03Ne1WMqra2pDJQyzY7/WH0vfOmmhSNcWMT/wPLLjvj/TmnARZx+n3ftzSf25rVjqcMd+EtZaIgdcrUtWj9qkiAzjk9VWIcuYIU4TzAZBu3A1mJhQbKQw2ESJQ/cso1NqKmduzXMr4R+DVSuSOy3BaprS2r83JfyBYaLod7U+CW+NRRwdYo4zWyjxweas0YzyxCXhCVzGtHJSswKjh7gPDtDlSMygkyqrQIxlWQrRF4narltitaIDB2yrBfxQKBSqo2q+5Fbplu/rFqpmQrW/tT5Rx2Hk7keKPL243Fy82mJDiEGRPpPz+B33cIYZcj2TpOWAch7xe9FsTbSnbWBAevd+Xfvz/qvvfhlff5wKcw41XYPT7aaw3WRlu64fHgvGlxSJisS+HD64fXkmtNsx5GIeghI0d0OsnsstJW68ssePTaCzdllvRKF2SyzWyIWBBVcH8arz8XJlyLF8qklLubXGaxrAU5rQpSV6PNz8ltCJdlMAhB59mZ4FaRtUWTsCbIaObqYKU9jV6Asxb0C7GySjrNoQU5jczAHYUVQS5eXm2ChO3MWmu+JHG96Mnw7pWvGgEG9zMvS1e93TJRsDWMcUHm9Ic9dsI2SCkfDIB6wrvAO9kF8mz0m0YFeeHqyh0CrES6goW5ycJsgyGM+pEqnHBUDQjRaDm0NT+SuEVACdgq3LJXaGpQrcbBzr4VQVorND1fQtnLW1NoikgHFC1cBDUp9/XqKmAThEY6i4LIaJGrUavtNpp1dSr3acIC7abRC8CfPNy7BgYxXmgqaoEOke2WUkuki8EQN51/A+MTAf4HM3o/NymtdagAAAAASUVORK5CYII="
                alt="icon"
              />
            </div>
            <h3>Access Controlled</h3>
            <p>
              Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Sed est
              non feugiat sagittis, donec.
            </p>
            <a href="/services-details" class="link-btn"
              >Learn More <i class="ph-caret-right"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="subscribe-area bg-f9f9f9 ptb-100">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 col-md-12">
          <div class="subscribe-content">
            <span class="sub-title">Subscribe Our Newsletter</span>
            <h2>The latest resources, sent to your inbox weekly</h2>
            <form class="newsletter-form">
              <div class="row">
                <div class="col-xl-8 col-lg-7 col-md-8">
                  <input
                    type="text"
                    class="input-newsletter"
                    placeholder="Enter your email address"
                    name="EMAIL"
                  />
                </div>
                <div class="col-xl-4 col-lg-5 col-md-4">
                  <button type="submit" class="btn-style-one red-light-color">
                    Subscribe Now
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="col-lg-6 col-md-12">
          <div class="subscribe-image">
            <img src="../images/subscribe1.png" alt="subscribe-image" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HeroBannerInner from "@/components/HeroBannerInner.vue";
export default {
  name: "services",
  components: {
    HeroBannerInner,
  },
};
</script>
